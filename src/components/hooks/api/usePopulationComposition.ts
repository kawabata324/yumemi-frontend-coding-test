import { PrefCode } from "@/types/pref"
import { PopulationCompositionResponse200, ResasResponseError } from "@/types/resas"
import { CustomHook } from "@/types/customHook"
import { useResasError } from "@/components/hooks/useResasError"
import { resasApi } from "@/libs/axios"
import { PopulationCompositionDataList } from "@/types/populationComposition"

type State = {}

type Action = {
  fetchPopulationComposition: (prefCode: PrefCode) => Promise<PopulationComposition | undefined>
}

type PopulationComposition = {
  totalPopulation: PopulationCompositionDataList
  populationByYounger: PopulationCompositionDataList
  populationByWorking: PopulationCompositionDataList
  populationByOlder: PopulationCompositionDataList
}

export const usePopulationComposition: CustomHook<State, Action> = () => {
  const {
    action: { handleResponseError },
  } = useResasError()

  const fetchPopulationComposition = async (prefCode: PrefCode): Promise<PopulationComposition | undefined> => {
    // 全ての市町村を選択 (-)
    // https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
    const CITY_CODE = "-"
    const requestParam = `prefCode=${prefCode}&cityCode=${CITY_CODE}`

    try {
      const { data } = await resasApi.get<PopulationCompositionResponse200 | ResasResponseError>(
        `/population/composition/perYear?${requestParam}`
      )

      if (data && "statusCode" in data) {
        handleResponseError(data, "都道府県の人口構成の取得に失敗しました")
        return {
          totalPopulation: [],
          populationByYounger: [],
          populationByWorking: [],
          populationByOlder: [],
        }
      } else if (data && "result" in data && data.result) {
        return {
          totalPopulation: data.result.data[0].data,
          populationByYounger: data.result.data[1].data,
          populationByWorking: data.result.data[2].data,
          populationByOlder: data.result.data[3].data,
        }
      }
    } catch (error) {
      console.error(error, "都道府県の人口構成の取得に失敗しました")
    }
  }

  return {
    state: {},
    action: {
      fetchPopulationComposition,
    },
  }
}
