import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"
import { useMemo } from "react"


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/Custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/Custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/Custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.actions"



export const HomePage = () => {

  const [ searchParams, setSearchParams ] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all','favorites','heroes','villains']
    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab])

  const {data: heroesResponse} = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })


  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de SuperHeroes"
          description="Descubre, explora y Administra super Heroes y villanos"
        />

        <CustomBreadcrumbs currentPage="Super Heroes"/>

        {/* Stats Dashboard */}
        <HeroStats />
    

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all"
              onClick={() => 
                setSearchParams((prev) => {
                  prev.set('tab', 'all');
                  return prev;
                })
              }
            >
              All Characters (16)
            </TabsTrigger>

            <TabsTrigger 
              value="favorites" 
              className="flex items-center gap-2"
              onClick={() => 
                setSearchParams((prev) => {
                  prev.set('tab', 'favorites');
                  return prev;
                })}
            >
              Favorites (3)
            </TabsTrigger>

            <TabsTrigger 
              value="heroes" 
              onClick={() => 
                setSearchParams((prev) => {
                  prev.set('tab', 'heroes');
                  return prev;
                })}
            >
              Heroes (12)
            </TabsTrigger>
            
            <TabsTrigger 
              value="villains" 
              onClick={() => 
                setSearchParams((prev) => {
                  prev.set('tab', 'villains');
                  return prev;
                })}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []}/>
          </TabsContent>
          <TabsContent value="favorites">
            {/* Mostrar todos los personajes favoritos */}
            <h1>Favoritos</h1>
          </TabsContent>
          <TabsContent value="heroes">
            {/* Mostrar todos los heroes */}
            <h1>Heroes</h1>
          </TabsContent>
          <TabsContent value="villains">
            {/* Mostrar todos los villanos */}
            <h1>Villanos</h1>
          </TabsContent>

        </Tabs>


        {/* Pagination */}
        <CustomPagination totalPages={8}/>
      </>
    </>
  )
}