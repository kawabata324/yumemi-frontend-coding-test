import { FC } from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { usePopulationGraphHelper } from "@/components/hooks/helper/usePopulationGraphHelper"
import { PopulationCompositionGraphElements } from "@/types/populationComposition"

type Props = {
  elements: PopulationCompositionGraphElements
}

export const PopulationCompositionGraph: FC<Props> = ({ elements }) => {
  const {
    state: { minYear, maxYear, maxPopulation },
    action: { generateRandomColorCode },
  } = usePopulationGraphHelper(elements)
  return (
    <ResponsiveContainer height={600} width="100%">
      <LineChart margin={{ top: 10, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" domain={[minYear, maxYear]} tickSize={20} type="number" />
        <YAxis dataKey="value" domain={[0, maxPopulation]} width={100} />
        <Tooltip />
        <Legend height={100} verticalAlign="top" />
        {elements.map((el) => (
          <Line data={el.data} dataKey="value" key={el.label} name={el.label} stroke={generateRandomColorCode()} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
