import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Image, MetaTitle } from "../atoms";
import { colors, sizes } from "../utils";
import { assetShape, translationFuncShape } from "../utils/shapes";
import {
  lessonTitleText,
  lessonTopicText,
  topicDescription
} from "../utils/textStyles";

const StyledLessonHeader = styled.div`
  position: relative;
  padding: 4rem 1rem 4rem;

  @media (min-width: ${sizes.tablet}) {
    padding: 4rem;
  }

  @media (min-width: ${sizes.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
    padding: 8rem 4% 10rem 14%;
  }

  @media (min-width: ${sizes.xldesktop}) {
    padding: 12rem 10% 14rem 25%;
  }

  .main {
    max-width: 38rem;
    margin-bottom: 2rem;

    @media (min-width: ${sizes.desktop}) {
      max-width: none;
      width: 47%;
    }
  }

  .secondary {
    width: 80%;

    @media (min-width: ${sizes.desktop}) {
      width: 44%;
      padding-top: 2rem;
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.offwhite};
    z-index: -1;

    @media (min-width: ${sizes.desktop}) {
      width: 67%;
    }
  }

  .block-title {
    margin-bottom: 0.5rem;
  }

  .name {
    ${lessonTitleText}
    line-height: 1.4;
    margin-bottom: 0.5rem;
    color: ${colors.black};
  }

  .description {
    ${topicDescription}
    line-height: 1.6;
  }

  .meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    margin: 1rem 0 0 auto;
    font-family: sans-serif;
    font-size: 0.8rem;
    text-transform: uppercase;

    @media (min-width: ${sizes.desktop}) {
      width: 75%;
    }
  }

  .meta-line {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    flex-grow: 2;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: ${colors.gray200};
    }
  }

  .meta-topic {
    ${lessonTopicText}
    color: ${colors.accent};
  }

  .meta-duration {
    color: ${colors.gray500};
    font-weight: 300;
    padding-right: 5px;
  }

  .meta-duration span {
    margin-right: 0.2rem;
  }
`;

const LessonHeader = ({ name, topic, description, duration, image, t }) => {
  const minutes = duration < 10 ? `0${duration}` : duration;

  return (
    <StyledLessonHeader id="intro">
      <div className="background" />
      <div className="main">
        <MetaTitle className="block-title" color="accent">
          {t("lesson-intro")}
        </MetaTitle>
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="secondary">
        <Image borderRadius shadow image={image} useSrcSet />
        <div className="meta">
          <span className="meta-topic">{topic}</span>
          <div className="meta-line" />
          <div className="meta-duration">
            <span>{minutes}</span>
            {t("minutes")}
          </div>
        </div>
      </div>
    </StyledLessonHeader>
  );
};

LessonHeader.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  image: assetShape.isRequired,
  t: translationFuncShape.isRequired
};

export default LessonHeader;
