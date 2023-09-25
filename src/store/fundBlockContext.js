import React, { useState, createContext } from "react";

export const FundBlockContext = createContext();

export function FundBlockProvider(props) {



  const [nft, setNft] = useState();
  
  return (
    <div>
      <FundBlockContext.Provider
        value={{
          nft,
          setNft,
          
         
        }}
      >
        {props.children}
      </FundBlockContext.Provider>
    </div>
  );
}