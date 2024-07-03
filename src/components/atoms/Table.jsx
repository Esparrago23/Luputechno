import React from "react";

function Table({ children },props) {
    return (
        <>
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="font-bold text-black">{props.head1}</th>
                        <th className="font-bold text-black">{props.head2}</th>
                        <th className="font-bold text-black">{props.head3}</th>
                        <th className="font-bold text-black">{props.head4}</th>
                        <th className="font-bold text-black">{props.head5}</th>
                        <th className="font-bold text-black">{props.head6}</th>
                        <th className="font-bold text-black">{props.head7}</th>
                        <th className="font-bold text-black">{props.head8}</th>
                    </tr>
                </thead>
                <tbody>
                        {children}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Table;
