export interface TaskFormInterface {
  configs: {
    datatestID: string;
  };
  data: {
    taskData: any; //Object
    isEditForm: boolean;
    baseData: any; //Object
  };
  callbacks: {
    handleCreate: Function;
    handleEdit: Function;
    handleClose: Function;
  };
}
