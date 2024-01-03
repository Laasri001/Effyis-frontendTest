import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { customerStats, orderStats, salesStats, productStats, shoppingStats } from '../../shared/data'
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import './home.css';
import Chart from '../../components/charts/Chart';
import MyCard from '../../components/MainCard/MyCard';
import { Stat } from '../../components/stats/Stat';
import { Chart as ChartJS, defaults, plugins } from "chart.js/auto";
import EmptyCard from '../../components/EmptyCard/EmptyCard';
import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';
import { ModalComponent } from '../../components/Modal-component/ModalComponent';


const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  const newProduct = () => {
    setOpenModal(prev => !prev)
  }
  const handleClose = () => {
    setOpenModal(prev => !prev)
  }

  return (
    <div className='home' >
      <div className='nav'>
        <Navbar />
      </div>
      <div className='top-cards' style={{ width: '90%' }}>
        <MyCard
          iconStyle='iconStyle'
          week={true}
          optionWeek={["This Week", "All Times"]}
          selectColor="#BEC0CA"
          selectBackground="white"
          MyIcon={PieChartOutlineIcon}

          cardStyle='statStyle'
          containerStyle='containerStyle'
        >
          <Stat
            stats={salesStats}
          />
        </MyCard>
        <MyCard
          selectColor="#BEC0CA"
          selectBackground="white"
          week={true}
          optionWeek={["This Week", "All Times"]}
          MyIcon={PeopleOutlineIcon}
          cardStyle='statStyle'
          containerStyle='containerStyle'
        >
          <Stat
            stats={customerStats}
          />
        </MyCard>
        <MyCard
          selectColor="#BEC0CA"
          selectBackground="white"
          week={true}
          optionWeek={["This Week", "All Times"]}
          MyIcon={ShoppingBagOutlinedIcon}
          cardStyle='statStyle'
          containerStyle='containerStyle'
        >
          <Stat
            stats={orderStats}
          />
        </MyCard>
      </div>

      <div className='bottom-cards' style={{ width: '90%' }}>
        <div className='left-div'>
          <div className='top-left' style={{ width: '100%' }}>
            <div className='left-top-left' style={{}}>
              <MyCard
                selectColor="#BEC0CA"
                selectBackground="white"
                week={true}
                optionWeek={["This Week", "All Times"]}
                title='Marketing'
                cardStyle='testCss'
              >
                <Chart
                  chartContainer='chartContainer'
                  type='Doughnut' data={{
                    barThickness: 2,
                    labels: ["Sept 10", "Sept 11", "Sept 12"],
                    datasets: [
                      {
                        label: '1',
                        data: [400, 400, 400],
                        borderColor: '#EEF0FA',
                        hoverOffset: 10,
                        borderWidth: 10,
                        backgroundColor: '#EEF0FA',
                        barThickness: 10,

                      }
                    ],


                  }} />
              </MyCard>
            </div>
            <div className='right-top-left' >
              <MyCard
                iconStyle='productIcon'
                iconBackground='rgba(255, 255, 255, 0.2)'
                MyIcon={FolderOutlinedIcon}
                cardStyle='product-style'
                containerStyle='containerStyle'
              >
                <Stat
                  titleStatColor="#FFFFFF"
                  stats={productStats}
                  valueColor="#FFFFFF"
                  percentColor="#DBDEEE"
                />
              </MyCard>
              <MyCard
                selectColor="#BEC0CA"
                selectBackground="white"
                week={true}
                optionWeek={["This Week", "All Times"]}
                iconBackground="rgba(255, 204, 145, 0.16)"
                MyIcon={ShoppingCartOutlinedIcon}
                cardStyle='stat-style'
                containerStyle='containerStyle'
              >
                <Stat
                  titleStatColor="#CC5F5F"
                  valueColor="#45464E"
                  percentColor="#519C66"
                  stats={shoppingStats}
                />
              </MyCard>
            </div>
          </div>
          <div className='bottom-left' style={{ width: '100%' }}>
            <MyCard
              selectBackgroundChart="#rgba(210, 53, 101, 0.08)"
              selectColorChart="#D23565"
              selectBackground="white"
              selectColor="#1C1D22"
              chartFilter={true}
              title='Summary'
              week='Last 7 days'
              optionWeek={["This Week", "All Times"]}
              optionsCharts={["Sales", "Orders", "Customers"]}
              cardStyle='barCss'
              options={["Sales", 'Orders', "Customers"]}
            >
              <Chart
                chartWidth='98%'
                chartContainer='chartContainer'
                type='Bar' data={{
                  barThickness: 2,
                  labels: ["Sept 10", "Sept 11", "Sept 12", "Sept 13", "Sept 14", "Sept 15", "Sept 16"],
                  datasets: [
                    {
                      label: '1',
                      data: [400, 400, 400, 400, 400, 400, 400],
                      borderColor: '#EEF0FA',
                      hoverOffset: 10,
                      borderWidth: 10,
                      backgroundColor: '#EEF0FA',
                      barThickness: 10,

                    }
                  ]
                }} />
            </MyCard>
          </div>
        </div>
        <div className='right-div' style={{ marginTop: '2rem' }}>
          <MyCard
            
            title='Recent Orders'
            cardStyle='right-card'
            containerStyle=''
          >
            <EmptyCard
              AddNewProduct={newProduct}
            />
          </MyCard>
          <ModalComponent
          openModal={openModal}
          handleClose={handleClose}
          />
        </div>
      </div>



    </div>


  )
}

export default Home