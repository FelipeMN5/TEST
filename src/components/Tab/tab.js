import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DadosDaEmpresa from "../DDEmpresa/DadosDaEmpresa";
import DadosProfissionais from "../DDprofissionais/DadosProfissionais";
import DadosPessoais from "../DDPessoais/DadosPessoais";
import MeusDados from "../Meusdados/MeusDados";
import NameComponent from "../NComponent/NameComponent";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <MeusDados />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Dados Pessoais" {...a11yProps(0)} />
          <Tab label="Dados Profissionais" {...a11yProps(1)} />
          <Tab label="Dados da Empresa" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <NameComponent />
      <TabPanel value={value} index={0}>
        <DadosPessoais />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DadosProfissionais />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DadosDaEmpresa />
      </TabPanel>
    </Box>
  );
}
