import { PrefCode, PrefName } from "@/types/pref"

export type PopulationCompositionData = { year: number; value: number; rate?: number | undefined }
export type PopulationCompositionDataList = Array<PopulationCompositionData>
export type PopulationCompositionGraphElement = { code: PrefCode; label: PrefName; data: PopulationCompositionDataList }
export type PopulationCompositionGraphElements = Array<PopulationCompositionGraphElement>
export type PopulationResponseData = { boundaryYear: number; data: PopulationCompositionGraphElements }
