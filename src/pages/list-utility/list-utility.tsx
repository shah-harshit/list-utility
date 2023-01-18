import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import toLower from "lodash/toLower";
import capitalize from "lodash/capitalize";
import toUpper from "lodash/toUpper";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";

export const ListUtilityPage = () => {
  const [inputList, setInputList] = useState<string>("");
  const [outputList, setOutputList] = useState<string>("");
  const [isSortListEnabled, setIsSortListEnabled] = useState<boolean>(true);
  const [isNumberListEnabled, setIsNumberListEnabled] =
    useState<boolean>(false);
  const [isCleanupListEnabled, setIsCleanupListEnabled] =
    useState<boolean>(false);
  const [listStartNumber, setListStartNumber] = useState<number | "">("");
  const [listStartSuffix, setListStartSuffix] = useState<string | "">("");
  const [cleanupPrefix, setCleanupPrefix] = useState<string>("");
  const [cleanupSuffix, setCleanupSuffix] = useState<string>("");
  const [convertCase, setConvertCase] = useState<string | null>(null);
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    component: string
  ): void => {
    const value = event.target.value;
    switch (component) {
      case "input-list":
        setInputList(value);
        break;
      case "list-start-number":
        setListStartNumber(Number(value));
        break;
      case "list-start-suffix":
        setListStartSuffix(value);
        break;
      case "cleanup-prefix":
        setCleanupPrefix(value);
        break;
      case "cleanup-suffix":
        setCleanupSuffix(value);
        break;
      default:
        return;
    }
  };

  const handleConvert = () => {
    const inputListArray = inputList.split("\n").map((val) => {
      const removedPrefix = cleanupPrefix
        ? val.split(cleanupPrefix)[1]?.trim()
        : val.trim();
      const removedSuffix = cleanupSuffix
        ? removedPrefix.split(cleanupSuffix)[0]?.trim()
        : removedPrefix;
      const cleanedValue = isCleanupListEnabled
        ? removedSuffix || val.trim()
        : val.trim();

      if (convertCase === "capitalize") {
        return capitalize(toLower(cleanedValue));
      } else if (convertCase === "upper") {
        return toUpper(cleanedValue);
      } else if (convertCase === "lower") {
        return toLower(cleanedValue);
      } else {
        return cleanedValue;
      }
    });

    let updatedList = inputListArray;

    if (isSortListEnabled) {
      updatedList = inputListArray.sort();
    }

    if (isNumberListEnabled) {
      updatedList = inputListArray.map(
        (val: string, index: number) =>
          `${index + Number(listStartNumber)}${listStartSuffix}${val}`
      );
    }

    setOutputList(updatedList.join("\n"));
  };

  const handleCheckList = (component: string): void => {
    switch (component) {
      case "sorting":
        setIsSortListEnabled((sort) => !sort);
        break;
      case "numbering":
        if (isNumberListEnabled) {
          setListStartSuffix("");
        }
        setListStartNumber(isNumberListEnabled ? "" : 1);
        setIsNumberListEnabled((number) => !number);
        break;
      case "cleanup":
        if (isCleanupListEnabled) {
          setCleanupPrefix("");
          setCleanupSuffix("");
        }
        setIsCleanupListEnabled((cleanup) => !cleanup);
        break;
      default:
        return;
    }
  };

  const handleCopyButtonClicked = () => {
    window.navigator.clipboard.writeText(outputList);
    setShowSnackbar(true);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <Grid
      container
      item
      flexDirection="column"
      spacing={2}
      margin={1}
      sm={11}
      xs={11}
    >
      <Grid item>
        <Typography variant="h4">List utility</Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Input list"
          multiline
          rows={10}
          placeholder="Enter a list"
          value={inputList}
          onChange={(e) => handleChange(e, "input-list")}
          autoFocus
        />
      </Grid>
      <Grid container item flexDirection="column" spacing={1}>
        <Grid container item flexDirection="column" sm={12} xs={12}>
          <FormHelperText>
            <Typography variant="body2" whiteSpace="pre-wrap">
              Please clean up the list before converting it.
            </Typography>
          </FormHelperText>
          <FormControlLabel
            label="Cleanup list"
            control={
              <Checkbox
                checked={isCleanupListEnabled}
                onChange={() => handleCheckList("cleanup")}
              />
            }
          />
          <Grid container item spacing={1} sm={12} xs={12}>
            <Grid item flex={1}>
              <TextField
                disabled={!isCleanupListEnabled}
                label="Remove Prefix"
                placeholder="Eg. 1)"
                value={cleanupPrefix}
                onChange={(e) => handleChange(e, "cleanup-prefix")}
              />
            </Grid>
            <Grid item flex={1}>
              <TextField
                disabled={!isCleanupListEnabled}
                label="Remove Suffix"
                placeholder="Eg. 's"
                value={cleanupSuffix}
                onChange={(e) => handleChange(e, "cleanup-suffix")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item flexDirection="row" sm={12} xs={12}>
          <FormControlLabel
            disabled={Boolean(convertCase) && convertCase !== "capitalize"}
            label="Capitalize"
            control={
              <Checkbox
                checked={convertCase === "capitalize"}
                onChange={() => setConvertCase((c) => (!c ? "capitalize" : ""))}
              />
            }
          />
          <FormControlLabel
            disabled={Boolean(convertCase) && convertCase !== "upper"}
            label="UPPER"
            control={
              <Checkbox
                checked={convertCase === "upper"}
                onChange={() => setConvertCase((c) => (!c ? "upper" : ""))}
              />
            }
          />
          <FormControlLabel
            disabled={Boolean(convertCase) && convertCase !== "lower"}
            label="lower"
            control={
              <Checkbox
                checked={convertCase === "lower"}
                onChange={() => setConvertCase((c) => (!c ? "lower" : ""))}
              />
            }
          />
        </Grid>
        <Grid container item flexDirection="column" sm={12} xs={12}>
          <FormControlLabel
            label="Sort list"
            control={
              <Checkbox
                checked={isSortListEnabled}
                onChange={() => handleCheckList("sorting")}
              />
            }
          />
        </Grid>
        <Grid container item flexDirection="column" sm={12} xs={12}>
          <FormControlLabel
            label="Number list"
            control={
              <Checkbox
                checked={isNumberListEnabled}
                onChange={() => handleCheckList("numbering")}
              />
            }
          />
          <Grid container item spacing={1} sm={12} xs={12}>
            <Grid item flex={1}>
              <TextField
                disabled={!isNumberListEnabled}
                type="number"
                label="Starting Number"
                placeholder="Starting number"
                value={listStartNumber}
                onChange={(e) => handleChange(e, "list-start-number")}
              />
            </Grid>
            <Grid item flex={1}>
              <TextField
                disabled={!isNumberListEnabled}
                label="Suffix"
                placeholder="Eg. )"
                value={listStartSuffix}
                onChange={(e) => handleChange(e, "list-start-suffix")}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          sx={{ float: "right", marginRight: 2 }}
          onClick={handleConvert}
        >
          Convert
        </Button>
      </Grid>
      <Grid item>
        <OutlinedInput
          fullWidth
          multiline
          value={outputList}
          rows={10}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{ top: 0, position: "absolute", right: 0 }}
                onClick={handleCopyButtonClicked}
              >
                <ContentCopyRoundedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Copied!
        </Alert>
      </Snackbar>
    </Grid>
  );
};
