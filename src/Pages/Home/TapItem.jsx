import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabItem = () => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/toys')
    .then(res => res.json())
    .then(data =>{
      if(tabIndex == 0){
        const marvel = data.filter(d => d.subcategory == "Marvel")
        console.log(marvel);
      }
      if(tabIndex === 1){
        const Avengers = data.filter(d => d.subcategory == "Avengers")
        console.log(Avengers);
      }
      if(tabIndex === 2){
        const Transformers = data.filter(d => d.subcategory == "Transformers")
        console.log(Transformers);
      }
    })
  }, [tabIndex]);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
        <Tab>Title 3</Tab>
      </TabList>
      <TabPanel>
        <div className="card w-96 glass">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="card w-96 glass">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="card w-96 glass">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default TabItem;
