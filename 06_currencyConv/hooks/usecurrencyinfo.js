import { useEffect } from "react";
import { useState } from "react";

function usecurrencyinfo(currency){
    useEffect((params) => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        )
    }
    ,[])

}