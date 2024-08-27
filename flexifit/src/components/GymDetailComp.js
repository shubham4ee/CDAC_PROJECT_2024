import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/gymDetails.css'
const GymDetailComp = () => {

    const { gym_id } = useParams();

    return (
        <div className='gym-details-container'>


            <main>
                <div class="grid-container">

                    <table border="1">
                        <tr className="mainImg">
                            <th rowspan="">Header spanning 2 rows</th>
                            <th>Header 1</th>
                            <th>Header 2</th>
                        </tr>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                        </tr>
                        <tr>
                            <th colspan="3">Header spanning 3 columns</th>

                        </tr>
                    </table>

                </div>
            </main>

        </div>
    );
};

export default GymDetailComp;
