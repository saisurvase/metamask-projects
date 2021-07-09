import React from 'react'

function Title(props) {
    const { label } = props

    return (
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="section-title">
                    <h4>{label}</h4>
                </div>
            </div>
        </div>
    )
}

export default Title