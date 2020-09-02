import React, { useEffect, useState } from 'react';


function Story(props : {title: string}) {
    const [details, setDetails] = useState([])
    console.log(props)
}


export default Story