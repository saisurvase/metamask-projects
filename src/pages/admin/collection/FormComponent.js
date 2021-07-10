import React, { useEffect, useState } from "react";


import {
  Avatar,
  Button,
  DateTimePicker,
  EditorComponent,
  FileDropSection,
  Text,
  ValidationTextComponent,
} from "../../../commonPages";
import EndDatePicker from "../../../commonPages/EndDatePicker";
import { validation } from "./formUtility";

function FormComponent(props) {
  const {
    isLoading,
    isFileUploadLoading,
    uploadedFile,
    actionInfo,
    onSelectFile,
    onClickFormSubmit,
  } = props;

  const { item: selectedItem = {}, action } = actionInfo || {};

  const [properties, setProperties] = useState([{ Key: "", Value: "" }]);
  const [formInfo, setFormInfo] = useState({
    dateTime: new Date(),
    ...selectedItem,
  });
  const [validationMessage, setValidationMessage] = useState({});
  const [editorValue, setEditorValue] = useState(null);

  const isEditing = action === "edit";
  const isView = action === "view";

  const {
    imageOrVideo,
    nftName,
    startingPrice,
    reservePrice,
    startTime,
    protectionTime,
    endTime,
    additionalPrice,
    physcicalArtworkIsAvailable,
    status,
    step,
    shortDescription,
  } = formInfo || {};
  const {
    fileValidationMessage,
    nameValidationMessage,
    startingPriceValidationMessage,
    reservePriceValidationMessage,
    aucationStartTimeValidationMessage,
    protectionTimeValidationMessage,
    physicalArtworkValidationMessage,
    additionalPriceValidationMessage,
    aucationEndTimeValidationMessage,
    stepValidationMessage,
    statusValidationMessage,
    shortDescriptionValidationMessage,
    descriptionValidationMessage,
  } = validationMessage || {};

  // console.log('formInfo==============', formInfo)

  const [aucEndDt, setAucEndDt]= useState(new Date())


  useEffect(() => {
    if (
      selectedItem &&
      Object.keys(selectedItem) &&
      Object.keys(selectedItem).length
    ) {
      setEditorValue(selectedItem.description || "");
    }
  }, [selectedItem]);

  useEffect(() => {
    if (properties && properties.length) {
      const { Key, Value } = properties[properties.length - 1];
      if (Key !== "" && Value !== "") {
        setProperties([...properties, { Key: "", Value: "" }]);
      }

      handleOnChange({ properties });
    }
  }, [properties]);

  useEffect(() => {
    uploadedFile && handleOnChange({ imageOrVideo: uploadedFile || undefined });
  }, [uploadedFile]);

  const handleOnSelectFile = ({ file }) => onSelectFile(file);

  const onChangeDate = (dateTime, key) => {
      setAucEndDt(dateTime)
    handleOnChange({ [key]: dateTime });
  };

  const handleOnChange = (info) => {
    setFormInfo({ ...formInfo, ...info });
  };

  const onClickSubmit = (type) => {

    const { status, formValidationMessage } = validation({
      ...formInfo,
      description: editorValue,
    });
    setValidationMessage(formValidationMessage);

    if (editorValue) {
    console.log(formInfo, editorValue, type);
    onClickFormSubmit({ ...formInfo, description: editorValue || "" }, type);
    }
  };

  const onChangePropertiesKey = (index, Key) => {
    const tempArray = properties;
    tempArray[index].Key = Key;
    setProperties([...tempArray]);
  };

  const onChangePropertiesValue = (index, Value) => {
    const tempArray = properties;
    tempArray[index].Value = Value;
    setProperties([...tempArray]);
  };

  let propertiesSection = null;
  if (properties && properties.length) {
    propertiesSection = properties.map(({ Key, Value }, index) => {
      return (
        <>
          {index !== 0 ? <br /> : null}
          <div className="row">
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. size"
                value={Key}
                onChange={(e) => onChangePropertiesKey(index, e.target.value)}
              />
            </div>
            <div className="col-sm-6 mt-2 mt-sm-0">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. M, L, XL"
                value={Value}
                onChange={(e) => onChangePropertiesValue(index, e.target.value)}
              />
            </div>
          </div>
        </>
      );
    });
  }

  let buttonSection = (
    <Button
      isLoading={isLoading}
      label="Submit"
      onClick={() => onClickSubmit("submit")}
    />
  );
  if (isEditing) {
    buttonSection = (
      <Button
        isLoading={isLoading}
        label="Update"
        onClick={() => onClickSubmit("update")}
      />
    );
  } else if (isView) {
    buttonSection = null;
  }

  return (
    <div className="content-body">
      <div className="container-fluid">
        {/* Page titled start */}
        <div className="page-titles">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <a href="javascript:void(0)">Create Collection</a>
            </li>
          </ol>
        </div>
        {/* Page titled end */}

        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="card">
              <div className="card-body">
                <div>
                  <FileDropSection
                    name="Choose File"
                    formatText="PNG, GIF, JPG"
                    selectedFile={handleOnSelectFile}
                    isLoading={isFileUploadLoading}
                    isDisable={isEditing || isView}
                  />
                </div>
                <ValidationTextComponent
                  validationMessage={fileValidationMessage}
                />
                <br />
                <label>
                  <b>NFT Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="NFT name"
                  value={nftName}
                  onChange={(e) => handleOnChange({ nftName: e.target.value })}
                />
                <ValidationTextComponent
                  validationMessage={nameValidationMessage}
                />
                <br />
                <label>
                  <b>Auction Start Time</b>
                </label>
                <DateTimePicker
                  placeholder="Date and time"
                  selectedDateTime={startTime}
                  isShowTime
                  onChange={(dateTime) => onChangeDate(dateTime, "startTime")}
                />
                <ValidationTextComponent
                  validationMessage={aucationStartTimeValidationMessage}
                />
                <br />
                <label>
                  <b>Starting Price</b>
                </label>
                <Text.DecimalNumberInput
                  className="form-control"
                  placeholder="e.g. 10"
                  value={startingPrice}
                  onChange={(e) =>
                    handleOnChange({ startingPrice: e.target.value })
                  }
                  maxLength={10}
                />
                <ValidationTextComponent
                  validationMessage={startingPriceValidationMessage}
                />
                <br />
                <label>
                  <b>Reserve Price</b>
                </label>
                <Text.DecimalNumberInput
                  className="form-control"
                  placeholder="e.g. 10"
                  value={reservePrice}
                  onChange={(e) =>
                    handleOnChange({ reservePrice: e.target.value })
                  }
                  maxLength={10}
                />
                <ValidationTextComponent
                  validationMessage={reservePriceValidationMessage}
                />
                <br />
                <label>
                  <b>Protection Time</b>
                </label>
                <Text.NumberInput
                  className="form-control"
                  placeholder="Protection time should be in minutes"
                  value={protectionTime}
                  onChange={(e) =>
                    handleOnChange({ protectionTime: e.target.value })
                  }
                  maxLength={5}
                />
                <ValidationTextComponent
                  validationMessage={protectionTimeValidationMessage}
                />
                <br />
                <label>
                  <b>Physical Artwork</b>
                </label>
                <div className="form-group mb-0">
                  <label className="radio-inline mr-3 c-pointer">
                    <input
                      type="radio"
                      name="artworkGroup"
                      checked={physcicalArtworkIsAvailable}
                      onClick={(e) =>
                        handleOnChange({
                          physcicalArtworkIsAvailable: e.target.checked,
                        })
                      }
                    />{" "}
                    Yes
                  </label>
                  <label className="radio-inline mr-3 c-pointer">
                    <input
                      type="radio"
                      name="artworkGroup"
                      checked={
                        !physcicalArtworkIsAvailable &&
                        physcicalArtworkIsAvailable !== undefined
                      }
                      onClick={(e) =>
                        handleOnChange({
                          physcicalArtworkIsAvailable: !e.target.checked,
                        })
                      }
                    />{" "}
                    No
                  </label>
                </div>
                <ValidationTextComponent
                  validationMessage={physicalArtworkValidationMessage}
                />
                {physcicalArtworkIsAvailable ? (
                  <>
                    <br />
                    <label>
                      <b>Additional Price</b>
                    </label>
                    <Text.DecimalNumberInput
                      className="form-control"
                      placeholder="e.g. 10"
                      value={additionalPrice}
                      onChange={(e) =>
                        handleOnChange({ additionalPrice: e.target.value })
                      }
                      maxLength={10}
                    />
                    <ValidationTextComponent
                      validationMessage={additionalPriceValidationMessage}
                    />
                  </>
                ) : null}
                <br />
                <label>
                  <b>Short Description</b>
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Short description"
                  value={shortDescription}
                  onChange={(e) =>
                    handleOnChange({ shortDescription: e.target.value })
                  }
                />
                <ValidationTextComponent
                  validationMessage={shortDescriptionValidationMessage}
                />
                <br />
                <label>
                  <b>Description</b>
                </label>
                <EditorComponent
                  onChange={(info) => setEditorValue(info)}
                  value={editorValue || ""}
                />
                <ValidationTextComponent
                  validationMessage={descriptionValidationMessage}
                />
                <br />
                <label>
                  <b>Aucation End Time</b>
                </label>{" "}
                <br />
                <EndDatePicker
                  placeholderText="Date and time"
                  selectedDateTime={endTime}
                  isShowTime
                  endDate={aucEndDt}
                  onChange={(dateTime) => onChangeDate(dateTime, "endTime")}
                />
             
                <ValidationTextComponent
                  validationMessage={aucationEndTimeValidationMessage}
                />
                <br />
                <label>
                  <b>Step for bid</b>
                </label>
                <Text.NumberInput
                  className="form-control"
                  placeholder="e.g. 1"
                  value={step}
                  onChange={(e) => handleOnChange({ step: e.target.value })}
                  maxLength={10}
                />
                <ValidationTextComponent
                  validationMessage={stepValidationMessage}
                />
                <br />
                <label>
                  <b>Properties (Optional)</b>
                </label>
                {propertiesSection}
                <br />
                {/* <label htmlFor=""><b>Status</b></label>
                                <div className="form-group">
                                    <select className="form-control default-select" onChange={e => handleOnChange({ status: e.target.value })}>
                                        <option>Select</option>
                                        <option value={1} selected={status === "1"}>1</option>
                                        <option value={2} selected={status === "2"}>2</option>
                                    </select>
                                </div>
                                <ValidationTextComponent validationMessage={statusValidationMessage} /> */}
                <br />
                {buttonSection}
              </div>
            </div>
          </div>

          {/* Preview section of file start */}
          <div className="col-xl-6 col-lg-12" style={{ height: "400px" }}>
            <label>
              <b>Preview</b>
            </label>
            <div
              className="card"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              {imageOrVideo ? (
                <Avatar
                  uri={imageOrVideo}
                  style={{ height: "300px", width: "300px" }}
                />
              ) : (
                <label>Prevlew of collection</label>
              )}
            </div>
          </div>
          {/* Preview section of file end */}
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
