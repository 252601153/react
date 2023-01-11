import React from "react"
const FancyButton = React.forwardRef((props, ref) => {
    return (
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    )
})

const ref = React.createRef();

<FancyButton ref={ref}>Click me!</FancyButton>
