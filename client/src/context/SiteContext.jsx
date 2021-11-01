import React, { createContext, useState, useContext} from "react";

const SiteContext = createContext()

const SiteProvider = ({children}) =>{
  const [sites, setSites] = useState(null)
  
  return (
    <SiteContext.Provider value={{sites, setSites}}>
      {children}
    </SiteContext.Provider>
  )
}

const useSites = () => {
  const context = useContext(SiteContext);
  if (context === undefined) {
    throw new Error("useSites must be used within a SiteProvider");
  }
  return context;
};

export {SiteProvider, useSites}
