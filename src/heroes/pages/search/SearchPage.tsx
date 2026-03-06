import { useQuery } from "@tanstack/react-query"
import { CustomJumbotron } from "@/components/Custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumbs } from "@/components/Custom/CustomBreadcrumbs"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useSearchParams } from "react-router"
import { searchHeroesAction } from "@/heroes/actions/search-heroes.actions"

export const SearchPage = () => {

  const [searchParams] = useSearchParams();

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;

  const {data: heroes = []} = useQuery({
    queryKey: ['search', {name, strength}],
    queryFn: () => searchHeroesAction({name, strength}),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre, explora y Administra super Heroes y villanos"
      />

      <CustomBreadcrumbs currentPage="Buscador de Heroes"
        // breadcrumbs={
        //   [
        //     {label: 'home1', to: '/' },
        //     {label: 'home2', to: '/' },
        //     {label: 'home3', to: '/' },
        //   ]
        // }
      />

      {/* Stats Dashboard */}
      <HeroStats/>

      {/* Filter and Search */}
      <SearchControls />

      <HeroGrid heroes={heroes}/>
    </>
  )
}

export default SearchPage;
