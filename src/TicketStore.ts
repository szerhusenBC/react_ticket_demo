import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'
import {z} from "zod";

export const ticketSchema = z.object({
    subject: z.string().min(5).max(100),
    description: z.string().min(5).max(500),
    severity: z.enum(["low", "medium", "high"])
});

export type Ticket = z.infer<typeof ticketSchema>;

interface TicketState {
    tickets: Ticket[],
    addTicket: (ticket: Ticket) => void
    clearAllTickets: () => void
}

export const useTicketStore = create<TicketState>()(
    devtools(
        persist(
            (set) => ({
                tickets: [],
                addTicket: (ticket) => set((state) => ({tickets: [...state.tickets, ticket]})),
                clearAllTickets: () => set(() => ({tickets: []}))
            }),
            {
                name: 'ticket-storage'
            }
        )
    )
);
