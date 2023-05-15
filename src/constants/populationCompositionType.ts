export const TOTAL_POPULATION = "総人口"
export const POPULATION_BY_YOUNG = "年少人口"
export const POPULATION_BY_WORKING = "労働人口"
export const POPULATION_BY_OLDER = "老年人口"

export type TotalPopulation = typeof TOTAL_POPULATION
export type PopulationByYoung = typeof POPULATION_BY_YOUNG
export type PopulationByWorking = typeof POPULATION_BY_WORKING
export type PopulationByOlder = typeof POPULATION_BY_OLDER

export type PopulationCompositionType = TotalPopulation | PopulationByYoung | PopulationByWorking | PopulationByOlder
export const populationCompositionTypes: PopulationCompositionType[] = [
  TOTAL_POPULATION,
  POPULATION_BY_YOUNG,
  POPULATION_BY_WORKING,
  POPULATION_BY_OLDER,
]
