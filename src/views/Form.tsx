import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Diaper, Eat, Grid, Sleep } from "../components";
import { useAppContext } from "../Context";

const Form: React.FC = () => {
  const { translate } = useAppContext();
  const params = useParams();
  const [loading, setLoading] = useState();
  const [data, setData] = useState({});

  const getParamType = () => {
    switch (params.type) {
      case "1":
        return <Sleep data={data} setData={setData} />;
      case "2":
        return <Eat data={data} setData={setData} />;
      case "3":
        return <Diaper data={data} setData={setData} />;
      default:
        return <Sleep data={data} setData={setData} />;
    }
  };

  const save = () => {};
  const loadData = () => {};

  return (
    <>
      {/* TOP BAR */}
      <Grid
        container={true}
        spacing={2}
        sx={{
          marginTop: "1em",
          padding: "1em",
        }}
      >
        <Grid item={true} size={{ xs: 12 }}>
          {getParamType()}
          <Button
            loading={loading}
            type="submit"
            fullWidth
            variant="contained"
            onClick={save}
            sx={{
              mt: 3,
              mb: 2,
            }}
          >
            {translate("save")}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
