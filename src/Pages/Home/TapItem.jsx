import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TapCard from "./TapCard";

const TabItem = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        if (tabIndex == 0) {
          const marvel = data.filter((d) => d.subcategory == "Marvel");
          setData(marvel);
        }
        if (tabIndex === 1) {
          const Avengers = data.filter((d) => d.subcategory == "Avengers");
          setData(Avengers);
        }
        if (tabIndex === 2) {
          const Transformers = data.filter(
            (d) => d.subcategory == "Transformers"
          );
          setData(Transformers);
        }
      });
  }, [tabIndex]);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Marvels</Tab>
        <Tab>Avengers</Tab>
        <Tab>Transformers</Tab>
      </TabList>
      <TabPanel>
        <div className="grid grid-col-1 md:grid-cols-3 gap-4 ">
          {datas?.slice(0, 10).map((data) => (
            <TapCard key={data.id} data={data}></TapCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-col-1 md:grid-cols-3 gap-4 ">
          {datas?.slice(0, 10).map((data) => (
            <TapCard key={data.id} data={data}></TapCard>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <div className="grid grid-col-1 md:grid-cols-3 gap-4 ">
          {datas?.slice(0, 10).map((data) => (
            <TapCard key={data.id} data={data}></TapCard>
          ))}
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabItem;
