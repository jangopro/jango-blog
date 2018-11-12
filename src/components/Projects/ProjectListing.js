import React from 'react';

import PropTypes from 'prop-types';
import ProjectHomeSection from '../../blocks/ProjectHomeSections';


const ProjectListing = ({ project }) => (
    <ProjectHomeSection>
        <div>
            <img src={'../images/' + project.frontmatter.projectImage} style={{width: 300}} alt=""/>
        </div>
        <div>
            <h3>{project.frontmatter.title}</h3>
            <ProjectHomeSection.Excerpt dangerouslySetInnerHTML={{
                __html: project.html
            }}></ProjectHomeSection.Excerpt>
        </div>
    </ProjectHomeSection>
);

export default ProjectListing;

ProjectListing.propTypes = {
    project: PropTypes.object
};


