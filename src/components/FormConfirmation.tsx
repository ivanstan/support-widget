import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

interface FormConfirmationState {
  form?: any;
  open: boolean;
}

export default class FormConfirmation extends React.Component<any, any> {

  public readonly state = {
    form: null,
    open: false,
  };

  componentDidMount(): void {
    const forms = document.querySelectorAll('.form-confirmation');

    for (let i = 0; i < forms.length; ++i) {
      let button = forms[i].querySelector('[type="submit"]');

      if (!button) {
        continue;
      }

      button.addEventListener('click', (event: Event) => {
        event.preventDefault();

        this.setState({ form: forms[i] });

        this.open();
      }, false);
    }
  }

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  submit = () => {
    const form: any = this.state.form;

    form.submit();
  };

  render = () => {
    const { open, form } = this.state;

    if (!form) {
      return null;
    }

    // @ts-ignore
    const title = form.getAttribute('data-title') || 'Confirmation required';
    // @ts-ignore
    const content = form.getAttribute('data-content') || 'Selected item will be permanently deleted. Would you like to continue?';
    // @ts-ignore
    const yes = form.getAttribute('data-yes') || 'Yes';
    // @ts-ignore
    const no = form.getAttribute('data-no') || 'No';

    return <Dialog fullScreen={false} onClose={this.close} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.close} color="primary">
          {no}
        </Button>
        <Button onClick={this.submit} color="primary" autoFocus>
          {yes}
        </Button>
      </DialogActions>
    </Dialog>;
  };
}
