import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Box extends Component {
    render() {
        return (
            <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
                {this.props.children}
            </div>
        );
    }
}

class Article extends Component {
    render() {
        const {title, author, date} = this.props 
        return (
            <section>
                <h2>{title}</h2>
                <p><em>Escrito por {author}</em></p>
                <Box>{date}</Box>
                <article>
                    {this.props.children}
                </article>
                <Box>{date}</Box>
            </section>
        );
    }
}

Article.propTypes = {
    author: PropTypes.string.isRequired
}


class ChildrenPropTypes extends Component {
    render() {
        return (
            <div>
                <Article title="Estudiando React"
                    author="Christopher Coronado"
                    date={new Date().toLocaleDateString()}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae tempore, impedit quam, esse corporis mollitia ullam molestiae eius repellendus porro, nisi nostrum tenetur? Tempora porro qui enim vel commodi?</p>
                    <strong>En conclusion, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo ea eveniet sed facilis eum, culpa laborum voluptates reiciendis consectetur magni perferendis, ut corrupti obcaecati ipsum accusantium. Exercitationem, consectetur non?</strong>
                </Article>
            </div>
        );
    }
}

export default ChildrenPropTypes;
