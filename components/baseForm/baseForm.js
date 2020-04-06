import React from "react";
import {Form, Button, Input} from "antd";
import User from "./user";




class Base extends React.Component {

    renderFormItem = (itemInfo, form) => {
        const {Form} = this.props
        const {Item} = Form;
        const { getFieldDecorator } = form;
        return(
        itemInfo.map(source => {
            // const {Item} = source
            // return (
            //     <Item>
            //         {getFieldDecorator(source.name, {rules: [{
            //             validator: source.validator
            //         }]})(source.Com)}
            //     </Item>
            // )

                   if(source.name === 'btn') {
                       return(
                           <Item>
                               {source.Com}
                           </Item>
                       )

                   }else {
                       return(
                           <Item>
                               {getFieldDecorator(source.name, {rules: [{
                                       validator: source.validator
                                   }]})(source.Com)}
                           </Item>
                       )
                   }

            })
        )
    }

     handleSubmit = e => {

        // const { onSubmit } = this.props;
        //  onSubmit()

         if (e) {
             e.preventDefault();
             e.stopPropagation();
         }

         // const { submit } = this.props;
         // if (submit) {
         //     submit();
         // }
         this.props.form.validateFields((err, values) => {
             if (!err) {
                 console.log('Received values of form: ', values);
             }
         });
         // console.log(323)

    }

    render() {
        const {form} = this.props
        console.log(User)
        return (
            <Form onSubmit={this.handleSubmit}>
                {/*{this.renderFormItem(itemInfo, form)}*/}
                <User form={form} />
                <Button htmlType="submit">234</Button>
            </Form>
        )
    }
}
const BaseForm = Form.create()(Base)

export default BaseForm