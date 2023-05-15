import { FC } from "react"
import { TabList, TabPanel, Tabs } from "react-tabs"

import { usePrefectureHelper } from "@/components/hooks/usePrefectureHelper"
import { CustomTab } from "@/components/presentational/elements/CustomTab"
import { PrefCheckbox } from "@/components/presentational/PrefCheckbox"
import { PrefCode, PrefCodeList, PrefList, PrefName } from "@/types/pref"

type Props = {
  onChangeCheckedList: (prefCode: PrefCode, prefName: PrefName) => void
  checkedIdList: PrefCodeList
  prefList: PrefList
}
export const PrefCheckboxes: FC<Props> = ({ onChangeCheckedList, checkedIdList, prefList }) => {
  const {
    state: { dividePrefLists, tabIndex },
    action: { selectTab },
  } = usePrefectureHelper(prefList)

  return (
    <Tabs defaultIndex={1} onSelect={(index) => selectTab(index)} tabIndex={tabIndex}>
      <TabList className="pref_checkboxes--tabList">
        <CustomTab>ALL</CustomTab>
        <CustomTab>北海道・東北</CustomTab>
        <CustomTab>関東</CustomTab>
        <CustomTab>中部</CustomTab>
        <CustomTab>近畿</CustomTab>
        <CustomTab>中国</CustomTab>
        <CustomTab>四国</CustomTab>
        <CustomTab>九州・沖縄</CustomTab>
      </TabList>
      {dividePrefLists.map((prefList, index) => (
        <TabPanel key={index}>
          <ul className="pref_checkboxes--pref_checkboxes">
            {prefList.map((pref) => (
              <li key={pref.prefCode}>
                <PrefCheckbox
                  checkedIdList={checkedIdList}
                  onChange={onChangeCheckedList}
                  prefCode={pref.prefCode}
                  prefName={pref.prefName}
                />
              </li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </Tabs>
  )
}
