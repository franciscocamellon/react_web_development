import { DateTimePicker, Grid, TextField } from "../..";
import { useAppContext } from "../../../Context";

const Sleep = ({ data, setData }) => {
  const { translate } = useAppContext();
  return (
    <Grid container={true} spacing={2}>
      <Grid item={true} size={{ xs: 12 }}>
        <DateTimePicker
          name="start_date"
          label={translate("data-hour-start")}
          ampm={false}
          format="DD/MM/YYYY HH:mm"
          fullWidth={true}
        />
      </Grid>
      <Grid item={true} size={{ xs: 12 }}>
        <DateTimePicker
          name="end_date"
          label={translate("data-hour-end")}
          ampm={false}
          format="DD/MM/YYYY HH:mm"
          fullWidth={true}
        />
      </Grid>
      <Grid item={true} size={{ xs: 12 }}>
        <TextField label={translate("observation")} multiline={true} rows={6} fullWidth={true} />
      </Grid>
    </Grid>
  );
};

export default Sleep;
