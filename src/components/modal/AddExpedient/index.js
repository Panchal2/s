import React from "react";
import { Input, Modal, Select} from "antd";

// import IntlMessages from "util/IntlMessages";

class AddExpedient extends React.Component {
  constructor(props) {
    super(props);

    const {id, dni, sanidad, dni2, dni3, dni4, name} = props.contact;
    this.state = {
      id,
      dni,
      sanidad,
      dni2,
      dni3,
      dni4,
      name
    }
  }

  render() {
    const Option = Select.Option;
    const {onSaveExpedient, onExpedientClose, open} = this.props;
    const {id, dni, sanidad, dni2, dni3, dni4, name} = this.state;
    return (
      <Modal title="Add Expedient"
        toggle={onExpedientClose} visible={open}
        closable={false}
        onOk={() => {
          if (name === '')
            return;
          onExpedientClose();
          onSaveExpedient(
            {
              'id': id,
              'dni': dni,
              'sanidad': sanidad,
              'dni2': dni2,
              'dni3': dni3,
              'dni4': dni4,
              'name': name,
            });
          this.setState({
            'id': id + 1,
            'dni': '',
            'sanidad': '',
            'dni2': '',
            'dni3': '',
            'dni4': '',
            'name': '',
          })

        }}
        onCancel={onExpedientClose}>

        <div className="gx-modal-box-row">
          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <Input
                required
                placeholder="DNI*"
                onChange={(event) => this.setState({dni: event.target.value})}
                defaultValue={dni}
                margin="none"/>
            </div>
            <div className="gx-form-group">
              <Select className="ant-input"
                onChange={(event) => this.setState({sanidad: event.target.value})}
                defaultValue="SANIDAD"
                margin="none">
                <Option value="jack">Jack</Option>
                <Option value="Visit Report">Visit Report</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="DNI 2"
                onChange={(event) => this.setState({dni2: event.target.value})}
                value={dni2}
                margin="normal"/>
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="DNI 3"
                onChange={(event) => this.setState({dni3: event.target.value})}
                value={dni3}
                margin="normal"
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="DNI 4"
                onChange={(event) => this.setState({dni4: event.target.value})}
                value={dni4}
                margin="normal"/>
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Name"
                onChange={(event) => this.setState({name: event.target.value})}
                value={name}
                margin="normal"/>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddExpedient;
