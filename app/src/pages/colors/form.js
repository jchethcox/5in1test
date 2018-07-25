import React from "react";
import { connect } from "react-redux";
import { addColor, chgColor } from "../../action-creators/colors";
import Form from "../../components/form";

const ColorForm = props => {
  return (
    <div>
      <h1>Add New Color</h1>
      <Form
        cancelUrl="/colors"
        onChange={props.onChange}
        onSubmit={props.onSubmit}
        {...props.currentColor}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentColor: state.currentColor
  };
};

const mapActionToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(chgColor(field, value));
    },
    onSubmit: history => color => {
      dispatch(addColor(color, history));
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapActionToProps
);
export default connector(ColorForm);
