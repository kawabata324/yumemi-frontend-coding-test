export const ALL_POPULATION = "総人口"
export const POPULATION_BY_YOUNG = "年少人口"
export const POPULATION_BY_WORKING_AGE = "労働人口"
export const POPULATION_BY_OLDER = "老年人口"

export type AllPopulation = typeof ALL_POPULATION
export type PopulationByYoung = typeof POPULATION_BY_YOUNG
export type PopulationByWorkingAge = typeof POPULATION_BY_WORKING_AGE
export type PopulationByOlder = typeof POPULATION_BY_OLDER

export type PopulationCompositionType = AllPopulation | PopulationByYoung | PopulationByWorkingAge | PopulationByOlder
