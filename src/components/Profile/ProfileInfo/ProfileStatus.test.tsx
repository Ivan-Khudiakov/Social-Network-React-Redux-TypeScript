import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";


describe('ProfileStatus component', () => {
    // тест смены статуса
    test('status from props should be in the state', () => {
        const component = create (<ProfileStatus status='Hello!' updateStatus={() => {}}/>)
        const root = component.getInstance()
        expect(root?.props.status).toBe('Hello!')
    })
    // тест того, что при первой отрисовке отрисовывается span
    test('after creation <span> should be displayed', () => {
        const component = create (<ProfileStatus status='Hello!' updateStatus={() => {}}/>)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children.length).toBe(1)
    })
    // тест того, что при первой отрисовке не отрисовывается input
    test('after creation <input> shouldn`t be displayed', () => {
        const component = create (<ProfileStatus status='Hello!' updateStatus={() => {}}/>)
        const root = component.root
        expect(() => root.findByType('input')).toThrow()
    })
    // тест того, что при двойном клике по span появляется input, в котором написан статус
    test('<input> should be displayed in editMode instead of span', () => {
        const component = create (<ProfileStatus status='Hello!' updateStatus={() => {}}/>)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('Hello!')
    })
    // тест того, что функция Callback работает
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create (<ProfileStatus status='Hello!' updateStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance?.props.updateStatus()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})