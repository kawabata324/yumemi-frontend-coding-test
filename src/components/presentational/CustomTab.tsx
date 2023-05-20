import { ReactTabsFunctionComponent, Tab, TabProps } from "react-tabs"

export const CustomTab: ReactTabsFunctionComponent<TabProps> = ({ children, ...otherProps }) => {
  return (
    <Tab className={`elements_custom_tab--tab`} selectedClassName={`elements_custom_tab--selected-tab`} {...otherProps}>
      {children}
    </Tab>
  )
}

CustomTab.tabsRole = "Tab"
