import './ProductSize.css'
import React from "react";
import Select from "react-select";

function ProductSize(props) {

    const handleChange = (e) => {
      props.setSize(e.value)
    }

    const defaultValue = { value: "", label: "Выбрать размер" }
    const options = [
        { value: "s", label: "s" },
        { value: "m", label: "m" },
        { value: "l", label: "l" }
      ];
      
      const formatOptionLabel = ({ value, label, customAbbreviation }) => (
        <div style={{ display: "flex" }}>
          <div >{label}</div>
        </div>
      );

    return(
         <Select
            onChange={ (event) => handleChange(event) }
            className='customSelect'
            defaultValue={ defaultValue }
            formatOptionLabel={ formatOptionLabel }
            options={options}
        />
    )
}

export default ProductSize
