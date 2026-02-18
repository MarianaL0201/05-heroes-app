import { CustomJumbotron } from "@/components/Custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descubre, explora y Administra super Heroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats/>

      {/* Filter and Search */}
      <SearchControls />
    </>
  )
}
