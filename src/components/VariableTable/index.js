import {useRef, useLayoutEffect, useState} from "react";
import "./styles.module.css";

const data = [
    { id: 1, name: 'Item 1', value: 'Value 1' },
    { id: 2, name: 'Item 2', value: 'Value 2' },
    { id: 3, name: 'Item 3', value: 'Value 3' },
    { id: 4, name: 'Item 4', value: 'Value 4' },
    // Add more items as needed
];

export default function VarTable(props) {
    return (
        <div className="App">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={item.id} className={index % 2 === 0 ? 'even' : 'odd'}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}