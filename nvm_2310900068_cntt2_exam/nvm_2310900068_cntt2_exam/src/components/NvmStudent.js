import React, { Component } from 'react'

export default class NvmStudent extends Component {
    
    render() {

        return (
            <>
                <tr>
                    <td>1</td>
                    <td>2310900068</td>
                    <td>Nguyễn Văn Minh</td>
                    <td>MinhXInh</td>
                    <td>13223242</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
