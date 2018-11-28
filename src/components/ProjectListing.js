import React from 'react';
import PropTypes from 'prop-types';
import ProjectHomeSection from '../blocks/ProjectHomeSections';

const ProjectListing = ({ project }) => (
    <ProjectHomeSection>
        <div>
            <img
                src={`${
                    project.frontmatter.projectImage.childImageSharp.fluid.src
                }`}
                alt=''
            />
        </div>
        <div>
            <h3>{project.frontmatter.title}</h3>
            <ProjectHomeSection.Excerpt
                dangerouslySetInnerHTML={{
                    __html: project.html,
                }}
            />
            <ProjectHomeSection.Link as='a' href={project.frontmatter.link}>
                Voir le projet &#8594;
            </ProjectHomeSection.Link>
        </div>
    </ProjectHomeSection>
);

export default ProjectListing;

ProjectListing.propTypes = {
    project: PropTypes.object,
};
