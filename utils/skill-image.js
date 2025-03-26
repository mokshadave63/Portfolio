import adobeXd from '../app/assets/svg/skills/adobe-xd.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import c from '../app/assets/svg/skills/c.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import css from '../app/assets/svg/skills/css.svg';
import django from '../app/assets/svg/skills/django.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import gcp from '../app/assets/svg/skills/gcp.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import markdown from '../app/assets/svg/skills/markdown.svg';
import matlab from '../app/assets/svg/skills/matlab.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import photoshop from '../app/assets/svg/skills/photoshop.svg';
import php from '../app/assets/svg/skills/php.svg';
import picsart from '../app/assets/svg/skills/picsart.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import premierepro from '../app/assets/svg/skills/premierepro.svg';
import python from '../app/assets/svg/skills/python.svg';
import pytorch from '../app/assets/svg/skills/pytorch.svg';
import react from '../app/assets/svg/skills/react.svg';
import wordpress from '../app/assets/svg/skills/wordpress.svg';

import pandas from '../app/assets/svg/skills/pandas.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';
import dotnet from '../app/assets/svg/skills/dotnet.svg';
import dotnetcore from '../app/assets/svg/skills/dotnetcore.svg'
import kubernetes from '../app/assets/svg/skills/kubernetes.svg'
import linux from '../app/assets/svg/skills/linux.svg'
import sqlalchemy from '../app/assets/svg/skills/sqlalchemy.svg'
import fastapi from '../app/assets/svg/skills/fastapi.svg'



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'adobe xd':
      return adobeXd;
    case 'aws':
      return aws;
    case 'bootstrap':
      return bootstrap;
    case 'c':
      return c;
    case 'canva':
      return canva;
    case 'css':
      return css;
    case 'django':
      return django;
    case 'figma':
      return figma;
    case 'gcp':
      return gcp;
    case 'git':
      return git;
    case 'html':
      return html;
    case 'java':
      return java;
    case 'javascript':
      return javascript;
    case 'markdown':
      return markdown;
    case 'matlab':
      return matlab;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'numpy':
      return numpy;
    case 'photoshop':
      return photoshop;
    case 'php':
      return php;
    case 'picsart':
      return picsart;
    case 'postgresql':
      return postgresql;
    case 'premiere pro':
      return premierepro;
    case 'python':
      return python;
    case 'pytorch':
      return pytorch;
    case 'react':
      return react;
    case 'wordpress':
      return wordpress;
    case 'pandas':
      return pandas;
    case 'scikit-learn':
      return scikitlearn;
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore;
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'fastapi':
      return fastapi;
    default:
      break;
  }
}

