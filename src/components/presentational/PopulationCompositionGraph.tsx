import { FC } from "react"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { PopulationCompositionGraphElements } from "@/types/populationComposition"
import { usePopulationGraphHelper } from "@/components/hooks/usePopulationGraphHelper"

type Props = {
  elements: PopulationCompositionGraphElements
}

export const PopulationCompositionGraph: FC<Props> = ({ elements }) => {
  const {
    state: { minYear, maxYear, maxPopulation },
    action: { generateRandomColorCode },
  } = usePopulationGraphHelper(elements)
  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart margin={{ top: 10, right: 5, left: 5, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" type="number" domain={[minYear, maxYear]} tickSize={20} />
        <YAxis dataKey="value" domain={[0, maxPopulation]} width={100} />
        <Tooltip />
        <Legend verticalAlign="top" height={100} />
        {elements.map((el) => (
          <Line dataKey="value" data={el.data} name={el.label} key={el.label} stroke={generateRandomColorCode()} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  )
}
