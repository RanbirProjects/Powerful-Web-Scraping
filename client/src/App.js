import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Container, 
  Box, 
  Grid, 
  Stack,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider
} from '@mui/material';
import WebIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DataObjectIcon from '@mui/icons-material/DataObject';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function TestimonialCard({ name, role, company, content, avatar }) {
  return (
    <Card elevation={2} sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={avatar} sx={{ mr: 2 }}>{name[0]}</Avatar>
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{name}</Typography>
            <Typography variant="body2" color="text.secondary">{role} at {company}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" sx={{ fontStyle: 'italic' }}>"{content}"</Typography>
        <Box sx={{ display: 'flex', mt: 2 }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} sx={{ color: 'gold', fontSize: 16 }} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

function PricingCard({ title, price, features, popular = false }) {
  return (
    <Card elevation={popular ? 8 : 3} sx={{ 
      height: '100%', 
      position: 'relative',
      transform: popular ? 'scale(1.05)' : 'none',
      transition: '0.3s',
      '&:hover': { transform: popular ? 'scale(1.08)' : 'scale(1.02)', boxShadow: 8 }
    }}>
      {popular && (
        <Chip 
          label="Most Popular" 
          color="secondary" 
          sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
        />
      )}
      <CardContent sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>{title}</Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>per month</Typography>
        <Divider sx={{ mb: 3 }} />
        <Stack spacing={2} sx={{ mb: 3 }}>
          {features.map((feature, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckCircleIcon sx={{ color: 'success.main', mr: 1, fontSize: 20 }} />
              <Typography variant="body2">{feature}</Typography>
            </Box>
          ))}
        </Stack>
        <Button 
          variant={popular ? "contained" : "outlined"} 
          color="primary" 
          size="large" 
          fullWidth
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}

function Navigation() {
  const location = useLocation();
  
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Box 
          component={Link} 
          to="/" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none', 
            color: 'inherit',
            flexGrow: 1,
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8
            }
          }}
        >
          <WebIcon sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Web Scraper Pro
          </Typography>
        </Box>
        <Button 
          color="inherit" 
          component={Link} 
          to="/"
          sx={{ color: location.pathname === '/' ? '#ffd700' : 'inherit' }}
        >
          Home
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/features"
          sx={{ color: location.pathname === '/features' ? '#ffd700' : 'inherit' }}
        >
          Features
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/pricing"
          sx={{ color: location.pathname === '/pricing' ? '#ffd700' : 'inherit' }}
        >
          Pricing
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/about"
          sx={{ color: location.pathname === '/about' ? '#ffd700' : 'inherit' }}
        >
          About
        </Button>
        <Button 
          color="inherit" 
          component={Link} 
          to="/contact"
          sx={{ color: location.pathname === '/contact' ? '#ffd700' : 'inherit' }}
        >
          Contact
        </Button>
        <Button color="secondary" variant="contained" sx={{ ml: 2 }}>
          Start Now
        </Button>
      </Toolbar>
    </AppBar>
  );
}

function Footer() {
  return (
    <Box sx={{ bgcolor: '#1a1a1a', color: 'grey.400', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WebIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                Web Scraper Pro
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Powerful web scraping solutions tailored to your business needs. 
              Trusted by 20,000+ customers worldwide.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Product</Typography>
            <Stack spacing={1}>
              <Typography variant="body2">Features</Typography>
              <Typography variant="body2">Pricing</Typography>
              <Typography variant="body2">API Docs</Typography>
              <Typography variant="body2">Integrations</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Company</Typography>
            <Stack spacing={1}>
              <Typography variant="body2">About</Typography>
              <Typography variant="body2">Careers</Typography>
              <Typography variant="body2">Blog</Typography>
              <Typography variant="body2">Press</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Support</Typography>
            <Stack spacing={1}>
              <Typography variant="body2">Help Center</Typography>
              <Typography variant="body2">Contact</Typography>
              <Typography variant="body2">Status</Typography>
              <Typography variant="body2">Security</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>Legal</Typography>
            <Stack spacing={1}>
              <Typography variant="body2">Privacy</Typography>
              <Typography variant="body2">Terms</Typography>
              <Typography variant="body2">GDPR</Typography>
              <Typography variant="body2">Compliance</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3, borderColor: 'grey.700' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Web Scraper Pro. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="body2">Made with ❤️ for data enthusiasts</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function HomePage() {
  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 12
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Powerful Web Scraping<br />
                <Box component="span" sx={{ color: '#ffd700' }}>Tailored to Your Needs</Box>
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                No more maintaining web scrapers or bypassing blocks – just reliable, accurate data from any public website.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <Button variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5 }}>
                  Get Started Free
                </Button>
                <Button variant="outlined" color="inherit" size="large" sx={{ px: 4, py: 1.5 }}>
                  Watch Demo
                </Button>
              </Stack>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SecurityIcon sx={{ mr: 1, color: '#4caf50' }} />
                  <Typography variant="body2">GDPR Compliant</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TrendingUpIcon sx={{ mr: 1, color: '#4caf50' }} />
                  <Typography variant="body2">99.9% Uptime</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Data Analytics Dashboard" 
                  style={{ 
                    maxWidth: '100%', 
                    height: 400, 
                    borderRadius: 12,
                    objectFit: 'cover',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }} 
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 10, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700, mb: 6 }}>
            What Our Customers Say
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <TestimonialCard 
                name="Sarah Johnson"
                role="Data Scientist"
                company="TechCorp"
                content="Reliable and easy to implement tool for data collection with excellent support. The API is intuitive and the data quality is outstanding."
                avatar="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TestimonialCard 
                name="Michael Chen"
                role="Product Manager"
                company="StartupXYZ"
                content="A fantastic resource to reliably, legally access otherwise-inaccessible data. This has transformed our market research capabilities."
                avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TestimonialCard 
                name="Emily Rodriguez"
                role="Marketing Director"
                company="GlobalRetail"
                content="Fast service, and high quality, flexible datasets suited to our business requirements. ROI was immediate and significant."
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

function FeaturesPage() {
  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh' }}>
      {/* Hero Section for Features */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        color: 'white',
        py: 12,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: 1
        }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h1" align="center" gutterBottom sx={{ fontWeight: 700, mb: 3, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Our Features
          </Typography>
          <Typography variant="h5" align="center" sx={{ mb: 6, opacity: 0.9, maxWidth: 800, mx: 'auto', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Trusted by 20,000+ customers worldwide for reliable and scalable data collection
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.2)', px: 3, py: 1, borderRadius: 2, backdropFilter: 'blur(10px)' }}>
              <TrendingUpIcon sx={{ mr: 1, color: '#4caf50' }} />
              <Typography variant="body2">99.9% Uptime</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.2)', px: 3, py: 1, borderRadius: 2, backdropFilter: 'blur(10px)' }}>
              <SecurityIcon sx={{ mr: 1, color: '#4caf50' }} />
              <Typography variant="body2">GDPR Compliant</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.2)', px: 3, py: 1, borderRadius: 2, backdropFilter: 'blur(10px)' }}>
              <WebIcon sx={{ mr: 1, color: '#4caf50' }} />
              <Typography variant="body2">Global Coverage</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Grid */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={12} sx={{ 
              height: '100%', 
              transition: '0.4s', 
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
              '&:hover': { 
                transform: 'translateY(-15px) scale(1.03)', 
                boxShadow: '0 25px 50px rgba(102, 126, 234, 0.4)',
                '& .feature-video': {
                  opacity: 1
                }
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                zIndex: 1
              }} />
              <Box className="feature-video" sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0,
                transition: 'opacity 0.4s',
                zIndex: 2
              }} />
              <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 3 }}>
                <Box sx={{ fontSize: 60, color: 'white', mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <BusinessIcon fontSize="inherit" />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                  Business Intelligence
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                  Access comprehensive business data on people, companies, jobs and reviews from LinkedIn, Crunchbase, and more.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  startIcon={<WebIcon />}
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                  }}
                >
                  Watch Demo
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={12} sx={{ 
              height: '100%', 
              transition: '0.4s', 
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #2d1b69, #11998e)',
              '&:hover': { 
                transform: 'translateY(-15px) scale(1.03)', 
                boxShadow: '0 25px 50px rgba(255, 107, 107, 0.4)',
                '& .feature-video': {
                  opacity: 1
                }
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                zIndex: 1
              }} />
              <Box className="feature-video" sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0,
                transition: 'opacity 0.4s',
                zIndex: 2
              }} />
              <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 3 }}>
                <Box sx={{ fontSize: 60, color: 'white', mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <TravelExploreIcon fontSize="inherit" />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                  Travel Analytics
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                  Real-time travel data from any destination for competitive analysis and market insights.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  startIcon={<WebIcon />}
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                  }}
                >
                  Watch Demo
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={12} sx={{ 
              height: '100%', 
              transition: '0.4s', 
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #0f3460, #533483)',
              '&:hover': { 
                transform: 'translateY(-15px) scale(1.03)', 
                boxShadow: '0 25px 50px rgba(78, 205, 196, 0.4)',
                '& .feature-video': {
                  opacity: 1
                }
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'linear-gradient(45deg, #4ecdc4, #44a08d)',
                zIndex: 1
              }} />
              <Box className="feature-video" sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0,
                transition: 'opacity 0.4s',
                zIndex: 2
              }} />
              <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 3 }}>
                <Box sx={{ fontSize: 60, color: 'white', mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <ShoppingCartIcon fontSize="inherit" />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                  eCommerce Monitoring
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                  Monitor competitors' prices, products, and reviews from any eCommerce platform.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  startIcon={<WebIcon />}
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                  }}
                >
                  Watch Demo
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={12} sx={{ 
              height: '100%', 
              transition: '0.4s', 
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #1e3c72, #2a5298)',
              '&:hover': { 
                transform: 'translateY(-15px) scale(1.03)', 
                boxShadow: '0 25px 50px rgba(168, 237, 234, 0.4)',
                '& .feature-video': {
                  opacity: 1
                }
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'linear-gradient(45deg, #a8edea, #fed6e3)',
                zIndex: 1
              }} />
              <Box className="feature-video" sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'url(https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0,
                transition: 'opacity 0.4s',
                zIndex: 2
              }} />
              <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 3 }}>
                <Box sx={{ fontSize: 60, color: 'white', mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <DataObjectIcon fontSize="inherit" />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                  AI & ML Data
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                  Power AI and LLMs with endless, ethically sourced web data for training and insights.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  startIcon={<WebIcon />}
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                  }}
                >
                  Watch Demo
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={12} sx={{ 
              height: '100%', 
              transition: '0.4s', 
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #2c1810, #8b4513)',
              '&:hover': { 
                transform: 'translateY(-15px) scale(1.03)', 
                boxShadow: '0 25px 50px rgba(255, 236, 210, 0.4)',
                '& .feature-video': {
                  opacity: 1
                }
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'linear-gradient(45deg, #ffecd2, #fcb69f)',
                zIndex: 1
              }} />
              <Box className="feature-video" sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0,
                transition: 'opacity 0.4s',
                zIndex: 2
              }} />
              <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 3 }}>
                <Box sx={{ fontSize: 60, color: 'white', mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <SearchIcon fontSize="inherit" />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                  SEO & SERP Analysis
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                  Maximize your SEO impact with real-time SERP data and competitor intelligence.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  startIcon={<WebIcon />}
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                  }}
                >
                  Watch Demo
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={12} sx={{ 
              height: '100%', 
              transition: '0.4s', 
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
              '&:hover': { 
                transform: 'translateY(-15px) scale(1.03)', 
                boxShadow: '0 25px 50px rgba(102, 126, 234, 0.4)',
                '& .feature-video': {
                  opacity: 1
                }
              }
            }}>
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                zIndex: 1
              }} />
              <Box className="feature-video" sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 200,
                background: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0,
                transition: 'opacity 0.4s',
                zIndex: 2
              }} />
              <CardContent sx={{ p: 4, textAlign: 'center', position: 'relative', zIndex: 3 }}>
                <Box sx={{ fontSize: 60, color: 'white', mb: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                  <WebIcon fontSize="inherit" />
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                  Custom Solutions
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                  Get structured and validated data from any domain, tailored to your specific requirements.
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  startIcon={<WebIcon />}
                  onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
                  }}
                >
                  Watch Demo
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Call to Action Section */}
        <Box sx={{ mt: 10, textAlign: 'center', p: 6, borderRadius: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, mb: 3, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
            Choose the features that best fit your data collection needs and start extracting valuable insights today.
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
            <Button variant="contained" color="secondary" size="large" sx={{ px: 4, py: 1.5, bgcolor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
              Start Free Trial
            </Button>
            <Button variant="outlined" color="inherit" size="large" sx={{ px: 4, py: 1.5, borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
              Schedule Demo
            </Button>
            <Button variant="outlined" color="inherit" size="large" sx={{ px: 4, py: 1.5, borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>
              View Documentation
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

function PricingPage() {
  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Pricing Plans
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          Choose the plan that best fits your data collection needs
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <PricingCard 
              title="Starter"
              price="99"
              features={[
                "10,000 records/month",
                "Basic API access",
                "Email support",
                "Standard data formats",
                "1 concurrent request"
              ]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PricingCard 
              title="Professional"
              price="299"
              features={[
                "100,000 records/month",
                "Advanced API features",
                "Priority support",
                "Custom data formats",
                "5 concurrent requests",
                "Data validation"
              ]}
              popular={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PricingCard 
              title="Enterprise"
              price="999"
              features={[
                "Unlimited records",
                "Custom integrations",
                "Dedicated support",
                "White-label solutions",
                "Unlimited requests",
                "Advanced analytics"
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function AboutPage() {
  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
              About Web Scraper Pro
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              We are a leading provider of web scraping solutions, helping businesses extract valuable data from the web efficiently and ethically.
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2020, Web Scraper Pro has grown to serve over 20,000 customers worldwide. Our mission is to democratize access to web data while maintaining the highest standards of compliance and ethics.
            </Typography>
            <Typography variant="body1" paragraph>
              Our team of data scientists, engineers, and legal experts work together to ensure that our scraping solutions are not only powerful and reliable but also respect website terms of service and data privacy regulations.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>20K+</Typography>
                  <Typography variant="body2" color="text.secondary">Happy Customers</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>99.9%</Typography>
                  <Typography variant="body2" color="text.secondary">Uptime</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>50+</Typography>
                  <Typography variant="body2" color="text.secondary">Countries</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>24/7</Typography>
                  <Typography variant="body2" color="text.secondary">Support</Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                alt="Team Collaboration" 
                style={{ 
                  maxWidth: '100%', 
                  height: 400, 
                  borderRadius: 12,
                  objectFit: 'cover',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function ContactPage() {
  return (
    <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Get in touch with our team for any questions or support
        </Typography>
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" paragraph>
                  Ready to accelerate your business with data? Contact us for a free consultation or to discuss your specific requirements.
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Contact Information</Typography>
                  <Typography variant="body2" paragraph>
                    📧 Email: hello@webscraperpro.com
                  </Typography>
                  <Typography variant="body2" paragraph>
                    📞 Phone: +1 (555) 123-4567
                  </Typography>
                  <Typography variant="body2" paragraph>
                    🏢 Address: 123 Data Street, Tech City, TC 12345
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Send us a Message
                </Typography>
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>Name</Typography>
                    <input 
                      type="text" 
                      placeholder="Your name"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '16px'
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>Email</Typography>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com"
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '16px'
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>Message</Typography>
                    <textarea 
                      placeholder="Tell us about your project..."
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '16px',
                        resize: 'vertical'
                      }}
                    />
                  </Box>
                  <Button variant="contained" color="primary" size="large" fullWidth>
                    Send Message
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Box sx={{ bgcolor: '#f8fafc', minHeight: '100vh' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
