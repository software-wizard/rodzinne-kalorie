import { create } from 'zustand';
import {Member} from '../data/Member';
import schedule from '../mocks/schedule.json';


interface MemberState {
    members: Member[];
    activeMember: Member;
    setActiveMember: (member: string) => void;
}


export const useStore = create<MemberState>((set) => {
    const members = getMembers();
    return {
        members: members,
        activeMember: members[0],
        setActiveMember: (memberName) => set((state) => {
            const member = state.members.find(m => m.name === memberName);
            return { activeMember: member || state.activeMember };
        }),
    };
});

//================================================
function getMembers() {
    return [
        {name: 'Przemek', schedule: schedule},
        {name: 'Kasia', schedule: {days: []}}
    ];
}