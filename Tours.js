function Tours({tours}){

    return(

        <div>

            <div>
                <h2>plan with Abhishek</h2>
            </div>

            <div>
                {
                    tours.map((tour)=>{
                        return <Card {...tour}></Card>
                    })
                }   
            </div>

        </div>

    );

}

export default Tours;