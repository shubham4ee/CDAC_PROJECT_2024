import '../css/about.css'

const About = () => {
    return (
        <div>

            <h2> About page </h2>
            <h2> FlexiFit is a gym membership portal </h2>
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h2 className='paragraph-body' style={{ lineHeight: '1.6', textAlign: 'justify', maxWidth: '800px', margin: 'auto' }}>
                    This Gym membership portal is a web application made using Java, React Router DOM, Spring Boot REST API, Axios.
                    Its main purpose is to prioritize users' fitness regardless of their location, under their budget without losing
                    their gains. It allows users to access gyms across the country under a single membership. We offer 3 types of
                    memberships: Silver, Gold, and Platinum, each with various perks and facilities. We provide filters based on
                    locations, user ratings, budget, and memberships, all with an overall user-friendly interface.
                </h2>
            </div>

        </div>
    )
}
export default About;