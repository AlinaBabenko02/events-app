import React from "react";
import { useIsFetching } from "react-query";
import { Alert, Form, Modal } from "antd";
import { EventForm } from "../shared/event-form";
import { useCreateEvent } from "../../../data/api/hooks";
import { EventFormFields } from "../../../data/types";
import { useToggleState } from "../../../data/utils/useToggleState";

interface CreateEventModalProps {
  createEventModalShown: boolean;
  setCreateEventModalShown: () => void;
}

export const CreateEventModal: React.FC<CreateEventModalProps> = ({
  createEventModalShown,
  setCreateEventModalShown,
}) => {
  const [form] = Form.useForm();
  const { mutate: createEvent, isLoading: isCreatingEvent } = useCreateEvent();
  const isFetching = !!useIsFetching();
  const isLoading = isCreatingEvent || isFetching;
  const [alertShown, setAlertShown] = useToggleState(false);

  const handleSubmit = (values: EventFormFields) => {
    const { date, ...newValues } = values;
    createEvent(
      {
        values: {
          ...newValues,
          startDate: values.date[0].toString(),
          endDate: values.date[1].toString(),
        },
      },
      { onSuccess: () => setCreateEventModalShown() }
    );
  };

  return (
    <Form
      layout="vertical"
      form={form}
      name="create-event"
      onFinish={handleSubmit}
      onFinishFailed={setAlertShown}
    >
      <Modal
        title="Create event"
        open={createEventModalShown}
        onCancel={setCreateEventModalShown}
        onOk={form.submit}
        okText="Create"
        okButtonProps={{
          loading: isLoading,
        }}
        cancelButtonProps={{ loading: isLoading }}
      >
        <EventForm />
        {alertShown && (
          <Alert
            message="There are errors in the form. Please correct before saving."
            type="error"
          />
        )}
      </Modal>
    </Form>
  );
};
