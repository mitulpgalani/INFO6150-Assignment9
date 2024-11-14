import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import CustomCard from '../components/cards/cards';


const jobPosts = [
    {
      id: 1,
      title: 'Full Stack Developer',
      description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
      lastUpdated: 'Last updated 2 days ago',
      applyLink: 'https://example.com/apply/full-stack-developer',
    },
    {
      id: 2,
      title: 'Digital Marketing Specialist',
      description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
      lastUpdated: 'Last updated 1 day ago',
      applyLink: 'https://example.com/apply/digital-marketing-specialist',
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
      lastUpdated: 'Last updated 4 hours ago',
      applyLink: 'https://example.com/apply/ux-ui-designer',
    },
    {
      id: 4,
      title: 'Data Scientist',
      description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
      lastUpdated: 'Last updated 3 days ago',
      applyLink: 'https://example.com/apply/data-scientist',
    },
    {
      id: 5,
      title: 'Customer Support Representative',
      description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
      lastUpdated: 'Last updated 6 hours ago',
      applyLink: 'https://example.com/apply/customer-support-representative',
    }
  ];

const JobListingsPage = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Job Listings
      </Typography>
      <Grid container spacing={3}>
        {jobPosts.map((job) => (
          <Grid item xs={6} md={3} key={job.id}>
            <CustomCard>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h5" component="h2">
                  {job.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {job.lastUpdated}
                </Typography>
                <Typography variant="body2" component="p" sx={{ mb: 2 }}>
                  {job.description}
                </Typography>
                <Button size="small" color="primary" href={job.applyLink} target="_blank">
                  Apply Now
                </Button>
              </Box>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default JobListingsPage;
