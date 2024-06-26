export interface VotingItemData {
    votingItemID: string;
    desc: string;
    voteCount: number;
}

export interface VotingItemProgress {
    votingItemID: string;
    progress: number;
}

export interface VotingItemIsChecked {
    votingItemID: string;
    isChecked: boolean;
}