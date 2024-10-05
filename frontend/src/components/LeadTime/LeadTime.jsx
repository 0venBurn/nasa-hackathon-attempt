import React from 'react'
import Select from 'react-select'

const values = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' }    
]

const LeadTime = () => {
    return <Select options ={values} placeholder='Lead time'/>
}

export default LeadTime;