import React from "react";
import { Modal, Text, Row, Spacer } from "@nextui-org/react";
import OrangeButton from "../orange_button";
import TextField from "../textField";
import SelectNumber from "../selectNumber";
import SelectActive from "../select";
import DateInput from "../dateInput";
import SelectMultipleProducts from "../selectMultipleProducts";

export default function ModifyOffer({
  width,
  height,
  name,
  description,
  price,
  quantity,
  start,
  finish,
  active,
  products,
  close,
  show,
}) {
  return (
    <Modal
      style={{ height }}
      width={width}
      closeButton
      aria-labelledby="modal-title"
      open={show}
      onClose={close}
    >
      <Text size={24} weight="bold">
        Modify Offer
      </Text>
      <Modal.Body>
        <Row justify="center" xs={12} alignItems="baseline">
          <TextField label="Name" width="300px" initialValue={name} />
          <Spacer x="6" />
          <TextField
            label="Description"
            width="300px"
            initialValue={description}
          />
        </Row>
        <Spacer y="1" />
        <Row
          justify="center"
          xs={12}
          display="flex"
          alignItems="center"
          align="top"
        >
          <TextField label="Price(€)" width="300px" initialValue={price} />
          <Spacer x="6" />
          <SelectNumber
            width="300px"
            height="40px"
            quantity={quantity}
            label="Quantity"
          />
        </Row>
        <Spacer y="1" />
        <Row
          style={{ paddingRight: "142px" }}
          justify="center"
          xs={12}
          display="flex"
          alignItems="center"
        >
          <DateInput width="300px" height="40px" date={start} label="Start" />
          <Spacer x="13" />
          <DateInput width="300px" height="40px" date={finish} label="Finish" />
        </Row>
        <Spacer y="1.5" />

        <Row justify="center" xs={12} alignItems="center">
          <SelectActive width="330px" height="40px" boolActive={active} />
          <Spacer x="6" />
          <SelectMultipleProducts
            width="330px"
            height="40px"
            product="Panino al salame"
          />
        </Row>
      </Modal.Body>
      <Modal.Footer
        style={{
          justifyContent: "center",
          display: "flex",
          paddingBottom: "2vw",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <OrangeButton
            height="60px"
            width="120px"
            text="Submit"
            textsize="20"
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
}
