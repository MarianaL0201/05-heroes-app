import { CustomJumbotron } from "@/components/Custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { CustomBreadcrumbs } from "@/components/Custom/CustomBreadcrumbs"

export const SearchPage = () => {
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
    </>
  )
}
