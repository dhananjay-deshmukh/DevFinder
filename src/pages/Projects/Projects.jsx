import React from 'react'
import styles from './Projects.module.css'
import ProjectImage from '../../assets/banner2.jpg'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { useNavigate } from 'react-router'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'
import { Link } from 'react-router-dom'
import {Footer} from '../../components/Footer/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Pagination } from '../../components/Pagination/Pagination'


export const Projects = () => {

  // const navigate = useNavigate();
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage =3;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Using Promises


  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/project-api/projects/?page=${currentPage}&per_page=${itemsPerPage}`)
      .then(response => {
        const data = response.data;
        const projects = data.results;
        setData(projects); // Set the 'data' variable to 'projects'
      })
      .catch((error) => setIsError(error.message))
  }, [currentPage, itemsPerPage])
  console.log(data)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderData = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return (
    data.slice(startIndex, endIndex).map((item, index) => {
    if (!item) {
      return null;
    }
    return (
      // render each item
      <>
      <Link to="/projects/project" state={{url: item.url}}>
      <ProjectCard
        image={item.featuredImage}
        projectName={item.title}
        
      />
      </Link>
         
      

      </>
    );
  
  }));
};



  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
            Idhar kuch toh header dalte searchbar ke sath
            <SearchBar />
        </div>
          

           
          
        

      
      <div className={styles.projects}>{renderData()}</div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        />
      
      <Footer />
        </div>
    </>
  )
}