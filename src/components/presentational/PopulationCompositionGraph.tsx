import { FC } from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { PopulationCompositionGraphElements } from "@/types/populationComposition"
import { usePopulationGraph } from "@/components/hooks/usePopulationGraph"

type Props = {
  elements: PopulationCompositionGraphElements
}

export const PopulationCompositionGraph: FC<Props> = ({ elements }) => {
  const {
    state: { minYear, maxYear, maxPopulation },
    action: { generateRandomColorCode },
  } = usePopulationGraph(elements)
  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart width={1000} height={600}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" type="number" domain={[minYear, maxYear]} />
        <YAxis dataKey="value" domain={[0, maxPopulation]} />
        <Tooltip />
        <Legend />
        {elements.map((el) => (
          <Line dataKey="value" data={el.data} name={el.label} key={el.label} stroke={generateRandomColorCode()} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
