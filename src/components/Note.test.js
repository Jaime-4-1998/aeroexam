import React, { Component } from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import InicioPer from "./InicioPer";


test('renders content', () => {
    const ini = {
        content: 'OK',
        important:true
    }

    const comp = render(<InicioPer ini={ini} />)

    comp.getByText('OK')
    comp.getByText('make not important')
})